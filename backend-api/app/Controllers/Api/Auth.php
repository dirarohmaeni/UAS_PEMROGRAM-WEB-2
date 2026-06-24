<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use App\Models\UserModel;

class Auth extends BaseController
{
    public function login()
    {
        $model = new UserModel();

        $data = $this->request->getJSON(true);

        $user = $model
            ->where('username', $data['username'])
            ->first();

        if (!$user) {
            return $this->response
                ->setStatusCode(401)
                ->setJSON([
                    'message' => 'User tidak ditemukan'
                ]);
        }

        if ($user['password'] != $data['password']) {
            return $this->response
                ->setStatusCode(401)
                ->setJSON([
                    'message' => 'Password salah'
                ]);
        }

        return $this->response->setJSON([
            'message' => 'Login berhasil',
            'token' => 'ELIBRARY_TOKEN_123'
        ]);
    }
}