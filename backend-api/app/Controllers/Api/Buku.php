<?php

namespace App\Controllers\Api;

use CodeIgniter\RESTful\ResourceController;
use App\Models\BukuModel;

class Buku extends ResourceController
{
    protected $modelName = BukuModel::class;
    protected $format = 'json';

    public function index()
    {
        return $this->respond(
            $this->model->findAll()
        );
    }

    public function show($id = null)
    {
        $data = $this->model->find($id);

        if (!$data) {
            return $this->failNotFound('Data tidak ditemukan');
        }

        return $this->respond($data);
    }

    public function create()
    {
        $cover = $this->request->getFile('cover');

        $namaCover = null;

        if ($cover && $cover->isValid()) {

            $namaCover = $cover->getRandomName();

            $cover->move(
                FCPATH . 'uploads',
                $namaCover
            );
        }

        $data = [

            'judul'         => $this->request->getPost('judul'),
            'penulis'       => $this->request->getPost('penulis'),
            'penerbit'      => $this->request->getPost('penerbit'),
            'tahun_terbit'  => $this->request->getPost('tahun_terbit'),
            'kategori_id'   => (int)$this->request->getPost('kategori_id'),
            'stok'          => $this->request->getPost('stok'),
            'cover'         => $namaCover

        ];

        $this->model->insert($data);

        return $this->respondCreated([
            'status'  => true,
            'message' => 'Buku berhasil ditambahkan'
        ]);
    }

    public function update($id = null)
    {
        $buku = $this->model->find($id);

        if (!$buku) {
            return $this->failNotFound(
                'Data buku tidak ditemukan'
            );
        }

        $namaCover = $buku['cover'];

        $cover = $this->request->getFile('cover');

        if (
            $cover &&
            $cover->isValid() &&
            !$cover->hasMoved()
        ) {

            if (
                !empty($namaCover) &&
                file_exists(
                    FCPATH . 'uploads/' . $namaCover
                )
            ) {
                unlink(
                    FCPATH . 'uploads/' . $namaCover
                );
            }

            $namaCover = $cover->getRandomName();

            $cover->move(
                FCPATH . 'uploads',
                $namaCover
            );
        }

        $kategori_id =
            (int)$this->request->getPost('kategori_id');

        if ($kategori_id < 1 || $kategori_id > 4) {

            $kategori_id = 1;

        }

        $data = [

            'judul'         => $this->request->getPost('judul'),
            'penulis'       => $this->request->getPost('penulis'),
            'penerbit'      => $this->request->getPost('penerbit'),
            'tahun_terbit'  => $this->request->getPost('tahun_terbit'),
            'kategori_id'   => $kategori_id,
            'stok'          => $this->request->getPost('stok'),
            'cover'         => $namaCover

        ];

        $this->model->update(
            $id,
            $data
        );

        return $this->respond([

            'status'  => true,
            'message' => 'Data berhasil diubah'

        ]);
    }

    public function delete($id = null)
    {
        $buku = $this->model->find($id);

        if (!$buku) {

            return $this->failNotFound(
                'Data tidak ditemukan'
            );

        }

        if (
            !empty($buku['cover']) &&
            file_exists(
                FCPATH . 'uploads/' . $buku['cover']
            )
        ) {

            unlink(
                FCPATH . 'uploads/' . $buku['cover']
            );

        }

        $this->model->delete($id);

        return $this->respond([

            'status'  => true,
            'message' => 'Data berhasil dihapus'

        ]);
    }
}