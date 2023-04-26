<template>
  <div>
    <h1>Create</h1>

    <form>
       <label>Select a Category</label>
       <select v-model="event.category">
          <option v-for="cat in categories" :key="cat">{{ cat }}</option> 
       </select>
       <h3>Name & describe your event</h3>
       <div class="field">
          <label>Title</label>

       </div>

    </form>

  </div>
 
</template>
