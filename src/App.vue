<template>
<html>
<head>
  <meta name="viewport" content="width=device-width">
  <title>pokemon</title>
</head>
<body>
  <div id="app">
    <Header />
    <router-view/>
   <!-- <Monster />
   <Monster2 /> -->
  </div>
</body>
</html>
</template>

<script>

import Header from "@/components/Header";

export default {
  data() {
    return {
     
    };
  },
 
  components: {
   Header
  },
};
</script>