import { results, sums } from './data.js';

const sum = new URLSearchParams(location.search).get('sum');
console.log(sum);
const result = results[sums[sum]];

const titleEl = document.querySelector('.page-title');
const characterEl = document.querySelector('.character');
const boxEls = document.querySelectorAll('.box');
const jobEls = document.querySelectorAll('.job');
const lectureEl = document.querySelector('.music');
const lectureImgEl = document.querySelector('.music img');

titleEl.innerHTML = sum + '점/10점!';
characterEl.src = result.character;
boxEls.forEach(function (boxEl, index) {
  boxEl.innerHTML = result.results[index];
});
jobEls.forEach(function (jobEl, index) {
  jobEl.innerHTML = result.jobs[0];
});
//jobEl.innerHTML = '안녕';
lectureEl.href = result.lectureUrl;
lectureImgEl.src = result.lectureImg;
