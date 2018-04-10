export default {
  waterfall: function(functions, callback) {
    
    if (functions.length === 0) { return callback(); }

    const next = ([head, ...rest], previousResult) => {
      const cb = (err, ...args) => {
        if (err) { return callback(err, args); }
        if (rest.length === 0) {
          callback(err, args);
        } else {
          next(rest, args);
        }
      };
      head(...previousResult, cb);
    };
    next(functions, []);
  },

  once: function(fn) { // обертка для однократного выполнения любой функции
    let called = false;
    return (...arg) => {
      if (called) return;
      called = true;
      fn(...arg);
    }
  },

  noop: (...args) => { }, // noop - это пустая функция, которая ничего не делает, но она нужна в тех случаях когда мы не передаем колбэк.  
                          // И для того, чтобы не писать проверки, передан или не передан колбэк, noop указывают как значение по умолчанию в аргументах функции. 
  
  each: function (coll, iteratee, callback = this.noop) { // по умолчанию callback = пустой функции
    const oncedCallback = this.once(callback);
    if (coll.length === 0) { return callback(null); }

    let completed = 0;
    const cb = err => {
      if (err) { return oncedCallback(err); }
      completed++;
      if (completed === coll.length) {
        oncedCallback(null);
      };
    };

    coll.forEach(item => iteratee(item, cb));
  }
};