<template>
  <div>
    <h1>Create</h1>

    <form>
       <label>Select a Category</label>
       <select v-model="event.category">
          <option v-for="cat in categories" :key="cat">{{ cat }}</option> 
       </select>

    </form>

  </div>
 
</template>
