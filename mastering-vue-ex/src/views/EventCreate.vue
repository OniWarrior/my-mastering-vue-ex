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
          <input v-model="event.title" type="text" placeholder="Add an event title"/> 
       </div>
       <div class="field">
          <label>Description</label>
          

       </div>

    </form>

  </div>
 
</template>
