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
          <input v-model="event.description" type="text" placeholder="Add a description"/>
       </div>
       <h3>Where is your event?</h3>
       <div class="field">
          <label>Location</label>
          <input v-model="event.location" type="text" placeholder="Add a location"/>
       </div>
       <h3>When is your event?</h3>

         

    </form>

  </div>
 
</template>
