const Peminjaman = {

    data() {
        return {
            peminjaman: [],
            search: ""
        }
    },

    computed: {

        filteredData() {

            return this.peminjaman.filter(item => {

                return (
                    (item.nama || "")
                        .toLowerCase()
                        .includes(this.search.toLowerCase())

                    ||

                    (item.buku || "")
                        .toLowerCase()
                        .includes(this.search.toLowerCase())
                );

            });

        }

    },

    async mounted() {
        await this.loadData();
    },

    methods: {

        async loadData() {

            try {

                const response = await axios.get(
                    "http://localhost:8080/peminjaman"
                );

                console.log(response.data);

                this.peminjaman = response.data;

            }

            catch (error) {

                console.log(error);

                alert("Gagal mengambil data peminjaman");

            }

        },

        async hapus(id) {

            if (!confirm("Yakin ingin menghapus data?"))
                return;

            try {

                await axios.delete(

                    `http://localhost:8080/peminjaman/${id}`,

                    {
                        headers: {
                            Authorization:
                                "Bearer ELIBRARY_TOKEN_123"
                        }
                    }

                );

                alert("Data berhasil dihapus");

                await this.loadData();

            }

            catch (error) {

                console.log(error);

                alert("Gagal menghapus data");

            }

        }

    },

template:`

<div class="content">

<div class="topbar">

<div>

<h2>

<i class="bi bi-arrow-left-right"></i>

Manajemen Peminjaman

</h2>

<p>

Kelola seluruh transaksi peminjaman buku.

</p>

</div>

<div class="user-badge">

<i class="bi bi-journal-bookmark-fill"></i>

{{ peminjaman.length }} Transaksi

</div>

</div>

<div class="cards">

<div class="card">

<div class="card-icon blue">

<i class="bi bi-arrow-left-right"></i>

</div>

<div class="card-title">

Total Transaksi

</div>

<div class="card-value">

{{ peminjaman.length }}

</div>

</div>

<div class="card">

<div class="card-icon green">

<i class="bi bi-check-circle"></i>

</div>

<div class="card-title">

Sudah Kembali

</div>

<div class="card-value">

{{ peminjaman.filter(p=>p.status=='Dikembalikan').length }}

</div>

</div>

<div class="card">

<div class="card-icon orange">

<i class="bi bi-clock-history"></i>

</div>

<div class="card-title">

Masih Dipinjam

</div>

<div class="card-value">

{{ peminjaman.filter(p=>p.status=='Dipinjam').length }}

</div>

</div>

</div>

<div class="page-action">

<div class="search-box">

<input

class="form-input"

v-model="search"

placeholder="Cari anggota atau buku..."

>

</div>

<router-link

to="/tambah-peminjaman"

class="btn-success"

>

<i class="bi bi-plus-circle"></i>

Tambah Peminjaman

</router-link>

</div>

<div class="table-card">

<table class="book-table">

<thead>

<tr>

<th>ID</th>

<th>Nama</th>

<th>Buku</th>

<th>Tanggal Pinjam</th>

<th>Status</th>

<th>Aksi</th>

</tr>

</thead>

<tbody>

<tr

v-for="item in filteredData"

:key="item.id"

>

<td>#{{ item.id }}</td>

<td>{{ item.nama }}</td>

<td>{{ item.buku }}</td>

<td>{{ item.tanggal_pinjam }}</td>

<td>

<span

:class="item.status=='Dikembalikan'
?'status-kembali'
:'status-dipinjam'"

>

{{ item.status }}

</span>

</td>

<td>

<div class="action-group">

<router-link

:to="'/edit-peminjaman/'+item.id"

class="btn-primary"

>

<i class="bi bi-pencil-square"></i>

Edit

</router-link>

<button

class="btn-danger"

@click="hapus(item.id)"

>

<i class="bi bi-trash"></i>

Hapus

</button>

</div>

</td>

</tr>

<tr v-if="filteredData.length==0">

<td colspan="6" class="empty-table">

<div class="empty-state">

<i class="bi bi-journal-x"></i>

<h3>

Belum Ada Data

</h3>

<p>

Belum ada transaksi peminjaman.

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