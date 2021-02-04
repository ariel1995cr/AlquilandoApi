<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserSaveRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Models\User;
use App\Traits\ResponseWithHttpStatus;

class UserController extends Controller
{
    use ResponseWithHttpStatus;

    //
    public function index(){
        return User::all();
    }

    public function show(User $user){
       return $user;
    }

    public function store(UserSaveRequest $request){
        $user = new User($request->all());
        if($user->save()){
            return $this->success(
                'Usuario creado correctamente',
                [
                  $user
                ]
            );
        }
    }

    public function update(User $user, UserUpdateRequest $request){
        if($user->update($request->all())){
            return $this->success(
                'Usuario actualizado correctamente',
                [
                  $user
                ]
            );
        }
     }

     public function destroy(User $user){
        $user->delete();
        return $this->success(
            'Usuario eliminado correctamente',
            [
              $user
            ]
        );
     }

}
