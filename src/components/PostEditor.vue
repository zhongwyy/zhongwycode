<template>
  <div class="post-editor">
    <div class="editor-toolbar">
      <button @click="insertImage">Вставить изображение</button>
      <input
        type="file"
        ref="fileInput"
        @change="handleImageUpload"
        accept="image/*"
        style="display: none"
      >
    </div>
    <QuillEditor
      v-model:content="content"
      contentType="html"
      :options="editorOptions"
      theme="snow"
    />
    <div class="editor-actions">
      <button @click="savePost" :disabled="!content">Сохранить пост</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { v4 as uuidv4 } from 'uuid';
import { usePostStore } from '../stores/postStore.ts';

export default defineComponent({
  name: 'PostEditor',
  components: { QuillEditor },
  setup() {
    const postStore = usePostStore();
    const content = ref('');
    const fileInput = ref<HTMLInputElement | null>(null);

    const editorOptions = {
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],
          [{ 'header': 1 }, { 'header': 2 }],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'script': 'sub'}, { 'script': 'super' }],
          [{ 'indent': '-1'}, { 'indent': '+1' }],
          [{ 'direction': 'rtl' }],
          [{ 'size': ['small', false, 'large', 'huge'] }],
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'font': [] }],
          [{ 'align': [] }],
          ['clean'],
          ['link', 'image', 'video']
        ]
      }
    };

    const insertImage = () => {
      fileInput.value?.click();
    };

    const handleImageUpload = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        const file = input.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
          // В реальном приложении здесь нужно загружать изображение на сервер
          // В нашем случае просто добавляем как base64
          const imageUrl = e.target?.result as string;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const quill = (document.querySelector('.ql-editor') as any)?.__vueParentComponent?.ctx.quill;
          if (quill) {
            const range = quill.getSelection();
            quill.insertEmbed(range.index, 'image', imageUrl);
          }
        };

        reader.readAsDataURL(file);
      }
    };

    const savePost = () => {
      if (content.value) {
        const newPost = {
          id: uuidv4(),
          content: content.value,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          isPublished: false
        };

        postStore.updatePost(newPost);
        content.value = '';
        alert('Пост сохранен!');
      }
    };

    return {
      content,
      editorOptions,
      fileInput,
      insertImage,
      handleImageUpload,
      savePost
    };
  }
});
</script>

<style scoped>
.post-editor {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: var(--color-text);
}

.editor-toolbar {
  margin-bottom: 10px;
}

.editor-actions {
  margin-top: 20px;
  text-align: right;
}

button {
  padding: 8px 16px;
  background-color: var(--color-button-bg);
  color: var(--color-text);
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  margin-right: 10px;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

</style>
