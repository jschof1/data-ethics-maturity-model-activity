<script>
  import studyQuestionMap from './studyQuestionMap.js';
  import { fade } from 'svelte/transition';


  let selectedStudy;
  let showPreLoadedOptions = true;
  let showQuestions = false;
  let questions = [];
  let answers = {};
  let showReview = false;
  let reviewSection
  let currentQuestionIndex = 0;
  let transitioning = false;
  let totalQuestions = 0;  // Total questions across all studies
  let questionsAnswered = 0;  // Total questions answered so far
  let progressPercentage = 0;  // Percentage of questions answered
  

  let completedStudies = JSON.parse(localStorage.getItem('completedStudies')) || [];

  const preLoadedTopics =[
    "Organisational governance and internal oversight",
    "Skills and knowledge",
    "Stakeholder and Staff Engagement",
    "Data Management Risk Processes",
    "Funding and Procurement",
    "Legal Standing and Compliance"
  ];
  
  
  function confirmSelection(study) {
    selectedStudy = study;
    questions = studyQuestionMap[selectedStudy] || []; // Populate questions based on the selected study
    showPreLoadedOptions = false;
    showQuestions = true;
    totalQuestions = Object.values(studyQuestionMap).flat().length;
    updateProgressBar();
  }
  

  function submitAnswers() {
    completedStudies.push(selectedStudy);
    localStorage.setItem('completedStudies', JSON.stringify(completedStudies));
    localStorage.setItem(selectedStudy, JSON.stringify(answers));

    if (completedStudies.length === preLoadedTopics.length) {
      done();
    } else {
      showPreLoadedOptions = true;
    }

    showQuestions = false;
    currentQuestionIndex = 0;
    answers = {};
  }

  function updateProgressBar() {
    progressPercentage = (questionsAnswered / totalQuestions) * 100;
  }


let currentQuestionOpacity = 1; // Initial opacity

function answerQuestion(answer, index) {
  if (transitioning) return;
  transitioning = true;
  answers[index] = answer;

  // Initiate fade-out
  let fadeOut = setInterval(() => {
    if (currentQuestionOpacity > 0) {
      currentQuestionOpacity -= 0.1;
    } else {
      clearInterval(fadeOut);
      
      // Update the question index and reset opacity
      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
      } else {
        submitAnswers();
      }
      
      currentQuestionOpacity = 0;

      // Initiate fade-in
      let fadeIn = setInterval(() => {
        if (currentQuestionOpacity < 1) {
          currentQuestionOpacity += 0.1;
        } else {
          clearInterval(fadeIn);
          transitioning = false;
        }
      }, 50); // 50ms interval for fading in
    }
  }, 50); // 50ms interval for fading out
     // Increase the count of answered questions
     questionsAnswered++;

// Update progress bar
updateProgressBar();
}


  function selectPreLoaded() {
    showPreLoadedOptions = true;
  }


  function done() {
    showPreLoadedOptions = false;
    showReview = true;
  }

  

</script>

<div class="progress-bar-container">
  <div class="progress-bar" style="width: {progressPercentage}%">
    {Math.round(progressPercentage)}%
  </div>
</div>
{#if showPreLoadedOptions}
<ul>
    {#each preLoadedTopics as study}
      <li>
        <button class="option-btns" on:click={() => confirmSelection(study)}>{study}</button>
      </li>
    {/each}
  </ul>
{/if}

{#if showQuestions}
<!-- display current topic -->
  <h2>{selectedStudy}</h2>
  {#each questions as question, index}
    {#if index === currentQuestionIndex}
      <div style="opacity: {currentQuestionOpacity}; transition: opacity 50ms;">
        <div class="question"><h3>{question.text}</h3> </div>
        {#each question.options as option}
          <button class="option-btns" on:click={() => answerQuestion(option, index)}>{option}</button>
        {/each}
      </div>
    {/if}
  {/each}
{/if}
<!-- Display Review -->
{#if showReview}
  <div id="review">
    <table>
      <!-- create a quick dummy table -->
      <tr>
        <th>Section</th>
        <th>Question</th>
        <th>Answer</th>
      </tr>
        
        {#each completedStudies as study}
          {#each studyQuestionMap[study] as question, index}
            <tr>
              <td><strong>{study}</strong></td>
              <td><em>{question.text}</em></td>
              <td>{JSON.stringify(JSON.parse(localStorage.getItem(study))[index])}</td>
            </tr>
          {/each}
        {/each}
    </table>
  </div>

{/if}




<style>
  h2 {
    color: white;
    background-color: rgba(206, 36, 36, 0.132);
    display: inline;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 10px;
  }
  .progress-bar-container {
  width: 100%;
  background-color: #fdf7f7;
  border-radius: 10px;
  margin-bottom: 20px;
}
.question {
  color: white;
  margin-bottom: 10px;
}
.progress-bar {
  width: 0;
  height: 15px;
  background-color: #4caf50;
  color: black;
  font-size: 10px;
  font-weight: bolder;
  text-align: center;
  line-height: 15px;
  color: white;
  border-radius: 10px;
}

table {
  border-radius: 1em;
  overflow: hidden;
  box-shadow: rgba(7, 7, 8, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

th, td {
  padding: 1em;
  background: #ddd;
  border-bottom: 2px solid white; 
  background-color: white;
}

button {
  margin: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}


.option-btns {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #ededed;
  cursor: pointer;
  transition: border-color 0.25s;
}

.option-btns:hover {
  border-color: #646cff;
}

.option-btns:focus,
.option-btns:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

li {
  list-style-type: none;
  display: inline;
}

</style>