<template>
    <Box>
      <div>
        <!-- <Link :href="`/listing/${listing.id}`"> -->
        <Link :href="route('listing.show', {listing: listing.id})">
          <div class="flex items-center gap-1">
            <Price :price="listing.price" class="text-2xl font-bold"/>
            <div>
              <div class="text-xs text-gray-500">
              <Price :price="monthlyPayment" class=""/>pm
              </div>
            </div>
          </div>
          
          <ListingSpace :listing="listing" class="text-lg"/>
          <ListingAddress :listing="listing" class="text-gray-500"/>
        </Link>
      </div>
      <div>
        <!-- <Link :href="`/listing/${listing.id}/edit`">Edit</Link> -->
        <Link :href="route('listing.edit', {listing: listing.id})">Edit</Link>
      </div>
      <div>
        <!-- <Link :href="`/listing/${listing.id}`" method="DELETE">Delete</Link> -->
        <Link :href="route('listing.destroy', {listing: listing.id})" method="DELETE" as="button">Delete</Link>
      </div>
    </Box>
</template>

<script setup>
import {Link} from '@inertiajs/vue3'
import ListingAddress from '@/Components/ListingAddress.vue'
import { route } from 'ziggy-js';
import Box from '@/Components/UI/Box.vue'
import ListingSpace from '@/Components/ListingSpace.vue'
import Price from '@/Components/Price.vue'
import { useMonthlyPayment } from '@/Composables/useMonthlyPayment'
import { isRef } from 'vue';

const props = defineProps({listing: Object})
const { monthlyPayment } = useMonthlyPayment(
  props.listing.price, 2.5, 25,
)


</script>