<?php

namespace App\Controllers\Api;

use CodeIgniter\RESTful\ResourceController;
use App\Models\AnggotaModel;

class Anggota extends ResourceController
{
    protected $modelName = AnggotaModel::class;
    protected $format = 'json';

    public function index()
    {
        return $this->respond(
            $this->model->findAll()
        );
    }

    public function show($id = null)
    {
        return $this->respond(
            $this->model->find($id)
        );
    }

    public function create()
{
    $data = $this->request->getJSON(true);

    $this->model->insert([
        'nama' => $data['nama'],
        'email' => $data['email'],
        'telepon' => $data['telepon'],
        'alamat' => $data['alamat']
    ]);

    return $this->respondCreated([
        'message' => 'Anggota berhasil ditambahkan'
    ]);
}

    public function update($id = null)
    {
        $data = $this->request->getJSON(true);

        $this->model->update($id, $data);

        return $this->respond([
            'message' => 'Anggota berhasil diupdate'
        ]);
    }

    public function delete($id = null)
    {
        $this->model->delete($id);

        return $this->respond([
            'message' => 'Anggota berhasil dihapus'
        ]);
    }
}