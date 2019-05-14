import Post from '../../src/js/post.js';

test('cord1', async () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const content = document.createElement('p');
  const post = new Post(div, content, true);
  post.create();
  await post.messageCord();
  const inp = document.querySelector('.inputMes');
  const button = document.body.querySelector('.butt');
  inp.value = '56.8, 89.7';
  await button.click();
  expect(post.handInput).toBe('[56.8, 89.7]');
});


/* test('cord2', async () => {
   let content = document.createElement('p');
   const post = new Post(document.body, content, true);
   post.create();
   await post.messageCord();
   let inp = document.querySelector('.inputMes');
   const button = document.body.querySelector('.butt');
   inp.value = '56.8,89.7';
   button.click();
   expect(post.handInput).toBe('[56.8, 89.7]');
 });

 test('cord3', async () => {
   let content = document.createElement('p');
   const post = new Post(document.body, content, true);
   post.create();
   await  post.messageCord();
   let inp = document.querySelector('.inputMes');
   const button = document.body.querySelector('.butt');
   inp.value = '[56.8, 89.7]';
   button.click();
   expect(post.handInput).toBe('[56.8, 89.7]');
 });

 test('cord4', async () => {
   let content = document.createElement('p');
   const post = new Post(document.body, content, true);
   post.create();
   await  post.messageCord();
   let inp = document.querySelector('.inputMes');
   const button = document.body.querySelector('.butt');
   inp.value = '[56.8,89.7]';
   button.click();
   expect(post.handInput).toBe('[56.8,89.7]');
 });

 */