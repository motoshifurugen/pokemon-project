<template>
<div>
    <p>子コンポーネントのShow.vueです。</p>
    <p class="received">{{ monsid }}</p>
</div>
</template>

<script>
export default {
    props: [
        'monsid'
    ]
}
</script>