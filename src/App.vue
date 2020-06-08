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
    <Footer />
   <!-- <Monster />
   <Monster2 /> -->
  </div>
</body>
</html>
</template>

<script>

import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default {
  data() {
    return {
     
    };
  },
 
  components: {
   Header,
   Footer
  },
};
</script>