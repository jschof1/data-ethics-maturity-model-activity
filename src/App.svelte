<script>
  import ChatBubble from './ChatBubble.svelte';
  import Assessment from './Assessment.svelte';
  let showOptions = false;
  
  function showAssesementOptions() {
    showOptions = true;
  }
//   function deleteLocalStorage() {
//   localStorage.clear();
// }
</script>

<div id="chat-window">
  <h1 id="title"> Data Ethics Maturity Model </h1>
  <!-- button for the user to delete local storage if they click it -->
<!-- <h3>Would you like to restart your progress?</h3>
<button on:click={deleteLocalStorage}>Delete previous answers</button> -->
<hr>
  <ChatBubble message="There are 6 sections to complete. Your completion progress is shown below. Click on a section to review your answers and complete it." onAppear={showAssesementOptions} />
  <hr>
  {#if showOptions}
    <Assessment />
  {/if}
</div>

<style>
  #chat-window {
    max-height: 600px;
    overflow-y: auto;
    margin: 0 auto;
    border: 1px solid #ccc;
    padding: 10rem;
background: rgb(34,152,195);
background: linear-gradient(0deg, rgba(34,152,195,0.6125043767507004) 0%, rgba(60,16,226,0.5214679621848739) 64%);
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
border-radius: 10px;
  }

  #title {
    color: white;
  }
</style>
