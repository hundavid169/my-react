<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = User::orderBy('id')->get();
        return response()->json($user, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $result = ['status' => true, 'errors' => ''];
        $validation = Validator::make($request->all(),[ 
            'name' => 'required',
            'email' => 'required|unique:users|email',
            'image' => 'required',
            'password' => 'required',
        ]);

        if($validation->fails()){
            $result['status'] = false;
            $result['errors'] = $validation->errors();
            return response()->json($result, 201);
        }

        $image =     $request['image'];
        $extension = $image->getClientOriginalExtension();
        $imageName = time() .'_'. str_random(10).'.'.$extension;
        $uploadedFile = $image->move('images', $imageName);

        $user =  User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => bcrypt($request['password']),
            'image' => $imageName,
        ]);
        return response()->json($result, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);
        return response()->json($user, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->name = $request['name'];
        $user->email = $request['email'];
        $user->save();
        return response()->json($user, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
         User::find($id)->delete();
         return response()->json('', 204);
    }

    public function image($image)
    {
        $user = User::first()->where('image', $image)->first();
        return view('users.image', ['image' => $image]);
    }
}
