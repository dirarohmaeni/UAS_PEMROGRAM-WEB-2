const EditPeminjaman = {

    data() {

        return {

            id: null,

            nama: "",
            buku: "",

            tanggal_pinjam: "",
            tanggal_kembali: "",

            status: "Dipinjam"

        }

    },

    async mounted() {

        this.id = this.$route.params.id;

        await this.loadData();

    },

    methods: {

        async loadData() {

            try {

                const response = await axios.get(
                    `http://localhost:8080/peminjaman/${this.id}`
                );

                const data = response.data;

                this.nama = data.nama;
                this.buku = data.buku;
                this.tanggal_pinjam = data.tanggal_pinjam;
                this.tanggal_kembali = data.tanggal_kembali;
                this.status = data.status;

            }

            catch(error){

                console.log(error);

                alert("Gagal mengambil data");

            }

        },

        async updatePeminjaman(){

            try{

                await axios.put(

                    `http://localhost:8080/peminjaman/${this.id}`,

                    {

                        nama: this.nama,
                        buku: this.buku,
                        tanggal_pinjam: this.tanggal_pinjam,
                        tanggal_kembali: this.tanggal_kembali,
                        status: this.status

                    },

                    {

                        headers:{
                            Authorization:
                            "Bearer ELIBRARY_TOKEN_123"
                        }

                    }

                );

                alert("Data berhasil diperbarui");

                this.$router.push("/peminjaman");

            }

            catch(error){

                console.log(error);

                alert("Gagal memperbarui data");

            }

        }

    },

template:`

<div class="content">

    <div class="form-container">

        <div class="form-header">

            <h2>📋 Edit Peminjaman</h2>

            <p>Perbarui data peminjaman buku</p>

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
                    @click="updatePeminjaman"
                    class="btn-success"
                >
                    💾 Simpan Perubahan
                </button>

            </div>

        </div>

    </div>

</div>

`

}