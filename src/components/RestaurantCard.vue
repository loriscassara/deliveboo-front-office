
<script>
export default {
    name: "RestaurantCard",
    props: ["item"]
}
</script>

<template>
    <div class="col-md-4 gy-4">
        <div class="card h-100">
            <h6 class="card-header">{{ item.id }}</h6>
            <div class="card-body">
                <h5 class="card-title">{{ item.business_name }}</h5>
                <p class="card-text">Descrizione: {{ item.description }}</p>
                <p class="card-text">Indirizzo: {{ item.address }}</p>
                <p class="card-text">Telefono: {{ item.phone }}</p>
                <div >
                        <span class="m-2 badge rounded-pill text-bg-info" v-for="tag in item?.types">{{ tag.name }}</span>
                        <span v-if="item?.types == ''">Nessuna categoria disponibile</span>
                </div>
                <router-link :to="{ name: 'Restaurant-detail', params: { id: item.id } }" class="btn btn-primary">
                    <span>Apri menù ristorante</span>
                </router-link>

                
            </div>
        </div>
    </div>
</template>