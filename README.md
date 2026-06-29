# 📚 E-Library 
Sistem Informasi Rental Buku Digital Berbasis REST API dan Single Page Application (SPA).

## 👤 Identitas Mahasiswa

- Nama : Dira Rohmaeni
- NIM : 312410465
- Kelas : I241E
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
```


Backend berjalan di:
http://localhost:8080

## Menjalankan Frontend

1. Buka folder `frontend-spa` menggunakan Visual Studio Code.
2. Install extension **Live Server** (jika belum ada).
3. Klik kanan pada file `index.html`.
4. Pilih **Open with Live Server**.
5. Frontend akan berjalan pada browser, misalnya:

http://127.0.0.1:5500/frontend-spa/index.html#/

---

📸 Screenshot Aplikasi
### Login

(Tambahkan screenshot)

### Dashboard

(Tambahkan screenshot)

### Data Buku

(Tambahkan screenshot)

### Data Anggota

(Tambahkan screenshot)

### Data Peminjaman

(Tambahkan screenshot)

---

### 🎥 Video Presentasi

Link YouTube:
https://youtu.be/HUpJS420O8E?si=Ji043G-fskmBXDTL

---

### 📝 Kesimpulan

Aplikasi E-Library berhasil dibuat menggunakan CodeIgniter 4 sebagai REST API dan Vue.js sebagai Single Page Application. Sistem dapat mengelola data buku, anggota, serta transaksi peminjaman buku dengan baik.
