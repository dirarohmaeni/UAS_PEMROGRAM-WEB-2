const TambahPeminjaman = {

    data() {

        return {

            nama: "",
            buku: "",
            tanggal_pinjam: "",
            tanggal_kembali: "",
            status: "Dipinjam"

        }

    },

    methods: {

        async simpanPeminjaman() {

            if(
                !this.nama ||
                !this.buku ||
                !this.tanggal_pinjam
            ){

                alert("Lengkapi semua data.");

                return;

            }

            try{

                await axios.post(

                    "http://localhost:8080/peminjaman",

                    {

                        nama: this.nama,
                        buku: this.buku,
                        tanggal_pinjam: this.tanggal_pinjam,
                        tanggal_kembali: this.tanggal_kembali,
                        status: this.status

                    },

                    {

                        headers:{
                            Authorization:"Bearer ELIBRARY_TOKEN_123"
                        }

                    }

                );

                alert("Peminjaman berhasil ditambahkan");

                this.$router.push("/peminjaman");

            }

            catch(error){

                console.log(error);

                alert("Gagal menambahkan peminjaman");

            }

        }

    },

template:`

<div class="content">

    <div class="form-container">

        <div class="form-header">

            <h2>📋 Tambah Peminjaman</h2>

            <p>Tambahkan transaksi peminjaman baru</p>

        </div>

        <div class="form-card">

            <div class="form-group">

                <label>Nama Anggota</label>

                <input
                    v-model="nama"
                    class="form-input"
                    placeholder="Masukkan nama anggota"
                >

            </div>

            <div class="form-group">

                <label>Judul Buku</label>

                <input
                    v-model="buku"
                    class="form-input"
                    placeholder="Masukkan judul buku"
                >

            </div>

            <div class="form-group">

                <label>Tanggal Pinjam</label>

                <input
                    type="date"
                    v-model="tanggal_pinjam"
                    class="form-input"
                >

            </div>

            <div class="form-group">

                <label>Tanggal Kembali</label>

                <input
                    type="date"
                    v-model="tanggal_kembali"
                    class="form-input"
                >

            </div>

            <div class="form-group">

                <label>Status</label>

                <select
                    v-model="status"
                    class="form-input"
                >

                    <option value="Dipinjam">
                        Dipinjam
                    </option>

                    <option value="Dikembalikan">
                        Dikembalikan
                    </option>

                </select>

            </div>

            <div class="form-action">

                <router-link
                    to="/peminjaman"
                    class="btn-secondary"
                >
                    ← Kembali
                </router-link>

                <button
                    @click="simpanPeminjaman"
                    class="btn-success"
                >
                    💾 Simpan Peminjaman
                </button>

            </div>

        </div>

    </div>

</div>

`

}