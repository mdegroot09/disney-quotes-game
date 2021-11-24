<template>
    <div class="background w-screen h-screen">
        <img class="filmstrip" src="https://assets.webiconspng.com/uploads/2017/02/Film-Strip-Transparent-Icon.png" alt="film strip">
        <img class="filmicon" src="http://cdn.onlinewebfonts.com/svg/img_469099.png" alt="film icon">
    </div>
</template>

<style>
.background {
    position: relative;
    overflow: hidden;
}
.filmstrip {
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: rotate(45deg);
    padding-top: 50px;
}
.filmicon {
    position: absolute;
    top: 0;
    right: 0;
    padding-bottom: 100px;
    transform: scale(-1, 1) rotate(-45deg);
    max-height: 200px;
}
</style>