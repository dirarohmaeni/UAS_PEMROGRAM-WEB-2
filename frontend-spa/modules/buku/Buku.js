const Buku = {

    data() {

        return {

            books: [],
            search: ''

        }

    },

    computed: {

        filteredBooks() {

            return this.books.filter(buku =>

                (buku.judul || '')
                .toLowerCase()
                .includes(this.search.toLowerCase())

                ||

                (buku.penulis || '')
                .toLowerCase()
                .includes(this.search.toLowerCase())

            );

        }

    },

    async mounted() {

        await this.loadData();

    },

    methods: {

        async loadData() {

            try {

                const response = await axios.get(
                    'http://localhost:8080/buku'
                );

                this.books = response.data;

            } catch(error) {

                console.log(error);

                alert('Gagal mengambil data buku');

            }

        },

        kategoriText(id){

            switch(parseInt(id)){

                case 1:
                    return "Komik";

                case 2:
                    return "Novel";

                case 3:
                    return "Pendidikan";

                case 4:
                    return "Teknologi";

                default:
                    return "-";

            }

        },

        async hapusBuku(id) {

            if(!confirm('Yakin ingin menghapus buku ini?')) {
                return;
            }

            try {

                await axios.delete(
                    `http://localhost:8080/buku/${id}`,
                    {
                        headers:{
                            Authorization:
                            'Bearer ELIBRARY_TOKEN_123'
                        }
                    }
                );

                alert('Buku berhasil dihapus');

                await this.loadData();

            } catch(error){

                console.log(error);

                alert('Gagal menghapus buku');

            }

        }

    },

    template:`

<div class="content">

    <div class="topbar">

        <div>

            <h2>
                <i class="bi bi-book"></i>
                Manajemen Buku
            </h2>

            <p>
                Kelola seluruh koleksi buku perpustakaan
            </p>

        </div>

        <div class="user-badge">

            <i class="bi bi-collection"></i>

            {{ books.length }} Buku

        </div>

    </div>

    <div class="cards">

        <div class="card">

            <div class="card-icon blue">
                <i class="bi bi-book"></i>
            </div>

            <div class="card-title">
                Total Buku
            </div>

            <div class="card-value">
                {{ books.length }}
            </div>

        </div>

        <div class="card">

            <div class="card-icon green">
                <i class="bi bi-box-seam"></i>
            </div>

            <div class="card-title">
                Total Stok
            </div>

            <div class="card-value">

                {{

                    books.reduce(
                        (a,b)=>a+parseInt(b.stok || 0),
                        0
                    )

                }}

            </div>

        </div>

        <div class="card">

            <div class="card-icon purple">
                <i class="bi bi-bookmark-star"></i>
            </div>

            <div class="card-title">
                Kategori
            </div>

            <div class="card-value">
                4
            </div>

        </div>

    </div>

    <div class="page-action">

        <div class="search-box">

            <input
                class="form-input"
                v-model="search"
                placeholder="Cari judul atau penulis..."
            >

        </div>

        <router-link
            to="/tambah-buku"
            class="btn-success"
        >

            <i class="bi bi-plus-circle"></i>

            Tambah Buku

        </router-link>

    </div>

    <div class="table-card">

        <table class="book-table">

            <thead>

                <tr>

                    <th>ID</th>
                    <th>Cover</th>
                    <th>Judul</th>
                    <th>Penulis</th>
                    <th>Penerbit</th>
                    <th>Tahun</th>
                    <th>Kategori</th>
                    <th>Stok</th>
                    <th>Aksi</th>

                </tr>

            </thead>

            <tbody>

                <tr
                v-for="buku in filteredBooks"
                :key="buku.id"
                >

                    <td>
                        #{{ buku.id }}
                    </td>

                    <td>

    <img
        class="book-cover"
        :src="'http://localhost:8080/uploads/' + buku.cover"
    >

</td>

                    <td>

                        <strong>
                            {{ buku.judul }}
                        </strong>

                    </td>

                    <td>
                        {{ buku.penulis }}
                    </td>

                    <td>
                        {{ buku.penerbit }}
                    </td>

                    <td>
                        {{ buku.tahun_terbit }}
                    </td>

                    <td>

                        <span class="status-kembali">

                            {{ kategoriText(buku.kategori_id) }}

                        </span>

                    </td>

                    <td>

                        <span class="status-kembali">

                            {{ buku.stok }}

                        </span>

                    </td>

                    <td>

                        <div class="action-group">

                            <router-link
                                :to="'/edit-buku/' + buku.id"
                                class="btn-primary"
                            >

                                <i class="bi bi-pencil-square"></i>

                                Edit

                            </router-link>

                            <button
                                class="btn-danger"
                                @click="hapusBuku(buku.id)"
                            >

                                <i class="bi bi-trash3"></i>

                                Hapus

                            </button>

                        </div>

                    </td>

                </tr>

                <tr
                v-if="filteredBooks.length == 0"
                >

                    <td
                    colspan="9"
                    class="empty-table"
                    >

                        <div class="empty-state">

                            <i class="bi bi-book-half"></i>

                            <h3>
                                Data Buku Tidak Ditemukan
                            </h3>

                            <p>
                                Belum ada data buku atau hasil pencarian kosong
                            </p>

                        </div>

                    </td>

                </tr>

            </tbody>

        </table>

    </div>

</div>

`

}