<template lang="">
     <img ref="image" src="@/assets/test.png" class="hidden" alt="image-edit">
    <div class="preview"></div>
    <button @click="onGetFile"></button>
</template>

<script>
    import Cropper from 'cropperjs';
    import 'cropperjs/dist/cropper.css'

    export default {
        name: 'HomeVue',
        mounted() {
            this.image = this.$refs.image
            this.cropper = new Cropper(this.image, {
                preview: '.preview',
            })
        },
        computed: {
        },
        data: ()=>({
            src: '@/assets/test.png',
            image: {},
            cropper: {}
        }),
        methods: {
            onGetFile() {
                const canvas = this.cropper.getCroppedCanvas();
                canvas.toBlob(function (blob) {
                    // Blob을 File 객체로 변환 (파일 이름은 'edited_image.png'로 설정)
                    const editedFile = new File([blob], 'edited_image.png', { type: 'image/png' });
                    console.log(editedFile);
                    const link = document.createElement('a');
                    link.href = window.URL.createObjectURL(editedFile);
                    link.download = editedFile.name;

                    // 클릭 이벤트를 트리거하여 다운로드 시작
                    document.body.appendChild(link);
                    link.click();

                    // 다운로드 후 링크 제거
                    document.body.removeChild(link);
                    // 여기서 editedFile을 사용하여 필요한 작업을 수행
                    // 예: 파일 업로드, 저장 등
                }, 'image/png'); // 원하는 파일 형식으로 지정
 
            }
        }
    }
</script>
<style lang="">
    
</style>