# 📚 E-Library
Sistem Informasi Rental Buku Digital Berbasis REST API dan Single Page Application (SPA).

## 👤 Identitas Mahasiswa

- Nama : Satria
- NIM : XXXXXXXX
- Kelas : TI.23.C1
- Mata Kuliah : Pemrograman Web 2

---

## 📖 Deskripsi Proyek

E-Library adalah aplikasi perpustakaan digital yang digunakan untuk mengelola data buku, anggota, dan transaksi peminjaman buku.

Aplikasi dibangun menggunakan:

- Backend : CodeIgniter 4 REST API
- Frontend : Vue.js SPA
- Database : MySQL
- HTTP Client : Axios
- CSS Framework : Bootstrap Icons + Custom CSS

---

## 🚀 Fitur Aplikasi

### Login Administrator
- Login menggunakan username dan password
- Autentikasi token

### Dashboard
- Total Buku
- Total Anggota
- Total Peminjaman
- Menu Cepat

### Manajemen Buku
- Tambah Buku
- Lihat Buku
- Edit Buku
- Hapus Buku
- Upload Cover Buku

### Manajemen Anggota
- Tambah Anggota
- Edit Anggota
- Hapus Anggota

### Manajemen Peminjaman
- Tambah Peminjaman
- Edit Peminjaman
- Hapus Peminjaman
- Status Dipinjam / Dikembalikan

---

## 🗄 Struktur Database

### Tabel Buku

| Field | Tipe |
|---------|---------|
| id | int |
| judul | varchar |
| penulis | varchar |
| penerbit | varchar |
| tahun_terbit | int |
| kategori_id | int |
| stok | int |
| cover | varchar |

### Tabel Anggota

| Field | Tipe |
|---------|---------|
| id | int |
| nama | varchar |
| email | varchar |
| telepon | varchar |
| alamat | text |

### Tabel Peminjaman

| Field | Tipe |
|---------|---------|
| id | int |
| nama | varchar |
| buku | varchar |
| tanggal_pinjam | date |
| status | varchar |

---

## 🔗 REST API Endpoint

### Buku

GET /buku

POST /buku

PUT /buku/{id}

DELETE /buku/{id}

### Anggota

GET /anggota

POST /anggota

PUT /anggota/{id}

DELETE /anggota/{id}

### Peminjaman

GET /peminjaman

POST /peminjaman

PUT /peminjaman/{id}

DELETE /peminjaman/{id}

---

## ⚙ Cara Menjalankan

### Backend

Masuk ke folder backend

```bash
composer install
php spark serve
