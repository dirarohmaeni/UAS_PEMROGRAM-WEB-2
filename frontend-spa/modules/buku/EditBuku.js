const EditBuku = {

    data() {

        return {

            id: null,

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

    async mounted() {

        this.id = this.$route.params.id;

        await this.loadData();

    },

    methods: {

        async loadData() {

            try {

                const response = await axios.get(
                    `http://localhost:8080/buku/${this.id}`
                );

                const buku = response.data;

                this.judul = buku.judul;
                this.penulis = buku.penulis;
                this.penerbit = buku.penerbit;
                this.tahun_terbit = buku.tahun_terbit;
                this.kategori_id = String(buku.kategori_id);
                this.stok = buku.stok;

                if (buku.cover) {

                    this.previewCover =
                        "http://localhost:8080/uploads/" + buku.cover;

                }

            } catch (error) {

                console.log(error);

                alert("Gagal mengambil data buku.");

            }

        },

        pilihCover(e) {

            const file = e.target.files[0];

            if (!file) return;

            this.cover = file;

            this.previewCover = URL.createObjectURL(file);

        },

        async updateBuku() {

            try {

                const formData = new FormData();

                formData.append("judul", this.judul);
                formData.append("penulis", this.penulis);
                formData.append("penerbit", this.penerbit);
                formData.append("tahun_terbit", this.tahun_terbit);
                formData.append("kategori_id", this.kategori_id);
                formData.append("stok", this.stok);

                if (this.cover) {

                    formData.append("cover", this.cover);

                }

                await axios.post(
    `http://localhost:8080/buku/${this.id}`,
    formData,
    {
        headers:{
            "Content-Type":"multipart/form-data"
        }
    }
);

                alert("Data berhasil diperbarui");

                this.$router.push("/buku");

            } catch (error) {

                console.log(error);

                alert(
                    error.response?.data?.message ||
                    "Gagal mengubah data."
                );

            }

        }

    },

    template: `

<div class="content">

    <div class="form-container">

        <div class="form-header">

            <h2>
                <i class="bi bi-pencil-square"></i>
                Edit Buku
            </h2>

            <p>Perbarui informasi buku.</p>

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
                >

            </div>

            <div class="form-group">

                <label>Penulis</label>

                <input
                    v-model="penulis"
                    class="form-input"
                >

            </div>

            <div class="form-group">

                <label>Penerbit</label>

                <input
                    v-model="penerbit"
                    class="form-input"
                >

            </div>

            <div class="row-form">

                <div class="form-group">

                    <label>Tahun Terbit</label>

                    <input
                        type="number"
                        v-model="tahun_terbit"
                        class="form-input"
                    >

                </div>

                <div class="form-group">

                    <label>Stok</label>

                    <input
                        type="number"
                        v-model="stok"
                        class="form-input"
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
    :value="String(k.id)"
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
                    @click="updateBuku"
                    class="btn-success"
                >

                    <i class="bi bi-floppy-fill"></i>

                    Simpan Perubahan

                </button>

            </div>

        </div>

    </div>

</div>

`

}