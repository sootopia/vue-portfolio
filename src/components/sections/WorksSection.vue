<template>
  <div class="works py-52 bg-slate-50">
    <div class="container mx-auto">
      <SectionHeader dark class="mb-16">그동안 작업한 프로젝트입니다.</SectionHeader>

      <div class="project__container grid grid-cols-3 gap-x-8 gap-y-16">
        <WorksCard v-for="(item, i) of worksData" :key="i" :data="item" />
      </div>

      <div class="text-center mt-24">
        <button
          type="button"
          class="text-white font-bold h-14 px-12 rounded-xl bg-slate-500 hover:bg-slate-600 active:bg-slate-700 active:shadow-[0px_0px_0px_3px_rgba(51,65,85,0.24)] outline-none transition-all"
          v-if="currentPage < totalPages"
          @click="
            currentPage++;
            getList();
          "
        >
          더보기
        </button>
      </div>

      <div ref="worksBottomRef"></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue';
import SectionHeader from '@/components/SectionHeader.vue';
import WorksCard from '@/components/WorksCard.vue';
import axios from 'axios';
const apiDomain = import.meta.env.VITE_EC2_HOST;

export default {
  components: {
    SectionHeader,
    WorksCard,
  },
  setup() {
    const worksData = ref([]);
    const currentPage = ref(1);
    const totalPages = ref(null);
    const worksBottomRef = ref(null);

    const getList = async () => {
      try {
        const response = await axios.get(
          `${apiDomain}/api/getWorksList.php?page=${currentPage.value}`,
        );

        worksData.value.push(...response.data.list);

        totalPages.value = response.data.totalPages;

        // if (currentPage.value > 1) {
        //   nextTick(() => {
        //     worksBottomRef.value.scrollIntoView();
        //   });
        // }
      } catch (error) {
        alert('오류가 발생했어요.');
        console.log(error);
      }
    };

    onMounted(() => {
      getList();
    });

    return { worksData, currentPage, totalPages, getList, worksBottomRef };
  },
};
</script>
