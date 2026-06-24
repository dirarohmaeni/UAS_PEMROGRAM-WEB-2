const TambahAnggota = {

    data() {

        return {

            nama: '',
            email: '',
            telepon: '',
            alamat: ''

        }

    },

    methods: {

        async simpanAnggota() {

            try {

                await axios.post(
                    'http://localhost:8080/anggota',
                    {
                        nama: this.nama,
                        email: this.email,
                        telepon: this.telepon,
                        alamat: this.alamat
                    },
                    {
                        headers:{
                            Authorization:
                            'Bearer ELIBRARY_TOKEN_123'
                        }
                    }
                );

                alert('Anggota berhasil ditambahkan');

                this.$router.push('/anggota');

            } catch(error) {

                console.log(error);

                alert('Gagal menambahkan anggota');

            }

        }

    },

    template: `

<div class="content">

    <div class="form-container">

        <div class="form-header">

            <h2>
                👤 Tambah Anggota
            </h2>

            <p>
                Masukkan data anggota perpustakaan
            </p>

        </div>

        <div class="form-card">

            <div class="form-group">

                <label>Nama Lengkap</label>

                <input
                    v-model="nama"
                    class="form-input"
                    placeholder="Masukkan nama anggota"
                >

            </div>

            <div class="form-group">

                <label>Email</label>

                <input
                    v-model="email"
                    type="email"
                    class="form-input"
                    placeholder="Masukkan email"
                >

            </div>

            <div class="form-group">

                <label>Telepon</label>

                <input
                    v-model="telepon"
                    class="form-input"
                    placeholder="Masukkan nomor telepon"
                >

            </div>

            <div class="form-group">

                <label>Alamat</label>

                <textarea
                    v-model="alamat"
                    class="form-input"
                    rows="4"
                    placeholder="Masukkan alamat"
                ></textarea>

            </div>

            <div class="form-action">

                <router-link
                    to="/anggota"
                    class="btn-secondary"
                >
                    Kembali
                </router-link>

                <button
                    @click="simpanAnggota"
                    class="btn-success"
                >
                    Simpan Anggota
                </button>

            </div>

        </div>

    </div>

</div>

`

}