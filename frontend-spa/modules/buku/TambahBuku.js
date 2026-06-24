const TambahBuku = {

    data() {

        return {

            judul: "",
            penulis: "",
            penerbit: "",
            tahun_terbit: "",
            kategori_id: "",
            stok: "",

            cover: null,
            previewCover: "",

            kategori: [

                { id: 1, nama: "Komik" },
                { id: 2, nama: "Novel" },
                { id: 3, nama: "Pendidikan" },
                { id: 4, nama: "Teknologi" }

            ]

        }

    },

    methods: {

        pilihCover(e){

            const file = e.target.files[0];

            if(!file) return;

            this.cover = file;

            this.previewCover = URL.createObjectURL(file);

        },

        async simpanBuku(){

            if(

                this.judul=="" ||

                this.penulis=="" ||

                this.penerbit=="" ||

                this.tahun_terbit=="" ||

                this.kategori_id=="" ||

                this.stok==""

            ){

                alert("Semua data wajib diisi");

                return;

            }

            const formData = new FormData();

            formData.append("judul",this.judul);

            formData.append("penulis",this.penulis);

            formData.append("penerbit",this.penerbit);

            formData.append("tahun_terbit",this.tahun_terbit);

            formData.append("kategori_id",this.kategori_id);

            formData.append("stok",this.stok);

            if(this.cover){

                formData.append("cover",this.cover);

            }

            try{

                await axios.post(

                    "http://localhost:8080/buku",

                    formData,

                    {

                        headers:{

                            "Content-Type":"multipart/form-data"

                        }

                    }

                );

                alert("Buku berhasil ditambahkan");

                this.$router.push("/buku");

            }

            catch(error){

                console.log(error);

                alert(

                    error.response?.data?.message ||

                    "Gagal menambahkan buku"

                );

            }

        }

    },

template:`

<div class="content">

<div class="form-container">

<div class="form-header">

<h2>

<i class="bi bi-book-half"></i>

Tambah Buku

</h2>

<p>

Tambahkan koleksi buku baru ke perpustakaan.

</p>

</div>

<div class="form-card">

<div class="form-group">

<label>Cover Buku</label>

<input

type="file"

accept="image/*"

class="form-input"

@change="pilihCover"

>

</div>

<div
v-if="previewCover"
class="preview-area"
>

<img

:src="previewCover"

class="preview-cover"

>

</div>

<div class="form-group">

<label>Judul Buku</label>

<input

v-model="judul"

class="form-input"

placeholder="Masukkan judul buku"

>

</div>

<div class="form-group">

<label>Penulis</label>

<input

v-model="penulis"

class="form-input"

placeholder="Masukkan nama penulis"

>

</div>

<div class="form-group">

<label>Penerbit</label>

<input

v-model="penerbit"

class="form-input"

placeholder="Masukkan nama penerbit"

>

</div>

<div class="row-form">

<div class="form-group">

<label>Tahun Terbit</label>

<input

type="number"

v-model="tahun_terbit"

class="form-input"

placeholder="2026"

>

</div>

<div class="form-group">

<label>Stok</label>

<input

type="number"

v-model="stok"

class="form-input"

placeholder="10"

>

</div>

</div>

<div class="form-group">

<label>Kategori</label>

<select

v-model="kategori_id"

class="form-input"

>

<option value="">

Pilih Kategori

</option>

<option

v-for="k in kategori"

:key="k.id"

:value="k.id"

>

{{ k.nama }}

</option>

</select>

</div>

<div class="form-action">

<router-link

to="/buku"

class="btn-secondary"

>

<i class="bi bi-arrow-left"></i>

Kembali

</router-link>

<button

class="btn-success"

@click="simpanBuku"

>

<i class="bi bi-check-circle-fill"></i>

Simpan Buku

</button>

</div>

</div>

</div>

</div>

`

}