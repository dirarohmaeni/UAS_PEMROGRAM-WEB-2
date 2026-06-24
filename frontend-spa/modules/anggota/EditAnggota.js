const EditAnggota = {

    data() {

        return {

            id: null,

            nama: '',
            email: '',
            telepon: '',
            alamat: ''

        }

    },

    async mounted() {

        this.id = this.$route.params.id;

        await this.loadData();

    },

    methods: {

        async loadData() {

            try {

                const response =
                    await axios.get(
                        `http://localhost:8080/anggota/${this.id}`
                    );

                this.nama = response.data.nama;
                this.email = response.data.email;
                this.telepon = response.data.telepon;
                this.alamat = response.data.alamat;

            }

            catch(error) {

                console.log(error);

                alert(
                    'Gagal mengambil data anggota'
                );

            }

        },

        async updateAnggota() {

            try {

                await axios.put(

                    `http://localhost:8080/anggota/${this.id}`,

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

                alert(
                    'Data anggota berhasil diperbarui'
                );

                this.$router.push(
                    '/anggota'
                );

            }

            catch(error) {

                console.log(error);

                alert(
                    'Gagal memperbarui anggota'
                );

            }

        }

    },

    template: `

<div class="content">

    <div class="form-container">

        <div class="form-header">

            <h2>
                👤 Edit Anggota
            </h2>

            <p>
                Perbarui informasi anggota perpustakaan
            </p>

        </div>

        <div class="form-card">

            <div class="form-group">

                <label>
                    Nama Lengkap
                </label>

                <input
                    v-model="nama"
                    class="form-input"
                    placeholder="Masukkan nama anggota"
                >

            </div>

            <div class="form-group">

                <label>
                    Email
                </label>

                <input
                    v-model="email"
                    class="form-input"
                    placeholder="Masukkan email"
                >

            </div>

            <div class="form-group">

                <label>
                    Telepon
                </label>

                <input
                    v-model="telepon"
                    class="form-input"
                    placeholder="Masukkan nomor telepon"
                >

            </div>

            <div class="form-group">

                <label>
                    Alamat
                </label>

                <textarea
                    v-model="alamat"
                    rows="4"
                    class="form-input"
                    placeholder="Masukkan alamat"
                ></textarea>

            </div>

            <div class="form-action">

                <router-link
                    to="/anggota"
                    class="btn-secondary"
                >
                    ← Kembali
                </router-link>

                <button
                    @click="updateAnggota"
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