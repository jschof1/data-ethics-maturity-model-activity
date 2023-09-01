<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition'
  export let message = "";
  export let onAppear = () => {};
  let showModal = false;
  
  onMount(() => {
    setTimeout(onAppear, 1000); // Trigger after 1 second
  });
</script>

<div transition:fade="{{duration: 500}}">
  <div class="chat-bubble">
    {message}
    <br><button class="modal-btn" on:click={() => showModal = true}>Learn more</button>
  </div>
</div>

{#if showModal}
  <div class="modal">
    <div class="modal-content">
      <span class="close" on:click={() => showModal = false}>&times;</span>
      <h3>What is the Data Ethics Maturity Model?</h3>
      <p>
        The Data Ethics Maturity Model serves as a framework for organizations to evaluate their current proficiency in the ethical handling of data. It examines various themes such as organizational governance, skills and knowledge, and compliance, among others. By employing this model, organizations can identify areas that require attention and plan actionable steps towards ethical maturity.
      </p>
      
      <h3>What does this interactive tool do?</h3>
      <p>
        This interactive tool is designed to operationalise the Data Ethics Maturity Model. It provides a set of questions under different themes that guide you through a self-assessment process. Your responses are then analyzed to give you a snapshot of your current data ethics maturity level. The tool also offers recommendations for improvement and can generate a comprehensive report for internal review.
      </p>
      
      <h3>How do I use this tool?</h3>
      <p>
      </p>
      <ol>
        <li>Start by selecting a pre-loaded theme or topic that you wish to evaluate.</li>
        <li>Answer the questions presented, which are tailored to the selected theme.</li>
        <li>Upon completion of the questions for a particular theme, you can choose to assess another theme or proceed to the review section.</li>
        <li>In the review section, you'll receive an overview of your responses, and your maturity level will be assessed.</li>
        <li>Optionally, you can print this overview or save it for future reference.</li>
      </ol>
      <p>
        The tool is designed to be intuitive, and you can navigate back and forth between sections if you need to revise your answers.
      </p>
    </div>
  </div>
{/if}

<style>
  .chat-bubble {
    background-color: #f1f1f1;
    padding: 30px;
    margin: 10px 0;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    position: relative;
  }
  .info-icon {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 0.8rem;
    border: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    line-height: 20px;
    cursor: pointer;
  }

  .modal-btn {
    margin-top: 10px;
  }
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
  }

  .modal-content {
    background-color: #ffffff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    border: 1px solid #888;
    width: 90%;
    position: relative;
    text-align: left;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 1.2rem;
    cursor: pointer;
  }
  
</style>
