import Post from '../../src/js/post.js';

test('cord1', () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const content = document.createElement('p');
  const post = new Post(div, content, true);
  post.create();
  post.messageCord();
  const inp = post.inputMes;
  const button = post.ok;
  inp.value = '56.8, 89.7';
  button.click();
  document.body.removeChild(div);
  expect(post.handInput).toBe('[56.8, 89.7]');
});


test('cord2', () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const content = document.createElement('p');
  const post = new Post(div, content, true);
  post.create();
  post.messageCord();
  const inp = post.inputMes;
  const button = post.ok;
  inp.value = '56.8,89.7';
  button.click();
  expect(post.handInput).toBe('[56.8, 89.7]');
});

test('cord3', () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const content = document.createElement('p');
  const post = new Post(div, content, true);
  post.create();
  post.messageCord();
  const inp = post.inputMes;
  const button = post.ok;
  inp.value = '[56.8, 89.7]';
  button.click();
  expect(post.handInput).toBe('[56.8, 89.7]');
});

test('cord4', () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const content = document.createElement('p');
  const post = new Post(div, content, true);
  post.create();
  post.messageCord();
  const inp = post.inputMes;
  const button = post.ok;
  inp.value = '[56.8,89.7]';
  button.click();
  expect(post.handInput).toBe('[56.8, 89.7]');
});
