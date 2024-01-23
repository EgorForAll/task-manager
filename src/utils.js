const isEmpty = (str) => !str.trim().length;

export const formValidate = (form) => {
  const title = form.querySelector("[name='title']");
  const text = form.querySelector('textarea');
  const proj = form.querySelector("[name='project']");
  if (isEmpty(title.value) || isEmpty(text.value) || isEmpty(proj.value)) {
    return false;
  } else {
    return true;
  }
};
