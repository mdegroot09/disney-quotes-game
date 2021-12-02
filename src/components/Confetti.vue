<template>
    <div class="background w-screen h-screen">
        <canvas id="my-canvas"></canvas>
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
    padding-left: 40px;
    transform: scale(-1, 1) rotate(-45deg);
    width: 8rem;
}
</style>