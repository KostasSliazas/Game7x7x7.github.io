(function () {
  'use strict'
  let state = 0
  let su = 0
  let count = 0
  let sum = 0
  const langas = document.getElementById('langas')
  const btns = document.getElementById('btn')
  const d1 = document.getElementById('overl1')
  const d2 = document.getElementById('overl2')
  const d3 = document.getElementById('overl3')

  function btn () {
    state = 1
    langas.style.backgroundImage = 'url(./images/pos.png)'
    langas.style.backgroundPosition = '-300px -0px'
    langas.style.backgroundRepeat = 'no-repeat'
    let a1 = document.getElementById('a12').className = ('a' + (Math.floor(Math.random() * 9) + 1))
    let a2 = document.getElementById('a13').className = ('a' + (Math.floor(Math.random() * 9) + 1))
    let a3 = document.getElementById('a14').className = ('a' + (Math.floor(Math.random() * 9) + 1))

    let b1 = document.getElementById('b12').className = ('a' + (Math.floor(Math.random() * 9) + 1))
    let b2 = document.getElementById('b13').className = ('a' + (Math.floor(Math.random() * 9) + 1))
    let b3 = document.getElementById('b14').className = ('a' + (Math.floor(Math.random() * 9) + 1))

    let c1 = document.getElementById('c12').className = ('a' + (Math.floor(Math.random() * 9) + 1))
    let c2 = document.getElementById('c13').className = ('a' + (Math.floor(Math.random() * 9) + 1))
    let c3 = document.getElementById('c14').className = ('a' + (Math.floor(Math.random() * 9) + 1))

    if (state === 1) {
      sum = 0
      btns.setAttribute('disabled', true)

      function areEqual () {
        const len = arguments.length
        for (let i = 1; i < len; i++) {
          if (arguments[i] === null || arguments[i] !== arguments[i - 1]) { return false }
        }
        return true
      };
      a1 = a1.substring(1)
      a2 = a2.substring(1)
      a3 = a3.substring(1)
      b1 = b1.substring(1)
      b2 = b2.substring(1)
      b3 = b3.substring(1)
      c1 = c1.substring(1)
      c2 = c2.substring(1)
      c3 = c3.substring(1)

      let de = document.getElementById('multi').innerHTML
      de = parseInt(de)
      const pos = []
      // --------------------------------centers x 10
      if (areEqual(a1, a2, a3)) {
        sum += parseInt(a1) * 10
        pos[0] = 1
      }
      // ---
      if (areEqual(b1, b2, b3)) {
        sum += parseInt(b1) * 10
        pos[1] = 2
      }
      // ---
      if (areEqual(c1, c2, c3)) {
        sum += parseInt(c1) * 10
        pos[2] = 3
      };
      // X
      if (areEqual(a1, b2, c3, c1, b2, a3)) {
        sum += parseInt(a1) * 100
        pos[3] = 4
      };
      // --------------------------------Center+top||bottom
      // --_
      if (areEqual(b1, b2, c3)) {
        sum += parseInt(b1) * de
        pos[4] = 5
      };
      // --^
      if (areEqual(b1, b2, a3)) {
        sum += parseInt(b1) * de
        pos[5] = 6
      };
      // --------------------------------\/
      // ^-_
      if (areEqual(a1, b2, c3)) {
        sum += parseInt(a1) * de
        pos[6] = 7
      };
      // _-^
      if (areEqual(c1, b2, a3)) {
        sum += parseInt(c1) * de
        pos[7] = 8
      };
      // --------------------------------VA
      // ^-^
      if (areEqual(b1, a2, b3)) {
        sum += parseInt(b1) * de
        pos[8] = 9
      };
      // _-_
      if (areEqual(b1, c2, b3)) {
        sum += parseInt(b1) * de
        pos[9] = 10
      };
      // --------------------------------ALL
      // All
      if (areEqual(a1, a2, a3, b1, b2, b3, c1, c2, c3)) {
        sum += (parseInt(a1) * 1000) * de
        pos[10] = 11
      }
      // --------------------------------
      ++count
      su += sum
      // langas.style.backgroundPosition="0 -100000px";

      document.getElementById('omgwin').className = ' '
      const del = setTimeout(function () {
        d1.classList.remove('ax1')
        d2.classList.remove('ax2')
        d3.classList.remove('ax3')
        document.getElementById('btn').removeAttribute('disabled')
        if (sum > 0) {
          document.getElementById('omgwin').className = 'ax5'
        }
        if (count % 6 === 0 && count !== 0) {
          const d = Math.floor(Math.random() * 6) + 1
          document.getElementById('b13').className = 'ax4'
          document.getElementById('b13').innerHTML = d
          document.getElementById('multi').innerHTML = d
        }
        document.getElementById('kiek').innerHTML = sum
        document.getElementById('suma').innerHTML = su
        document.getElementById('count').innerHTML = count

        if (pos[0]) {
          langas.style.backgroundImage += ', url(./images/pos.png)'
          langas.style.backgroundPosition += ', -0 -0'
        }
        if (pos[1]) {
          langas.style.backgroundImage += ', url(./images/pos.png)'
          langas.style.backgroundPosition += ', -0 -360px'
        }
        if (pos[2]) {
          langas.style.backgroundImage += ', url(./images/pos.png)'
          langas.style.backgroundPosition += ', -0 -180px'
        }
        if (pos[3]) {
          langas.style.backgroundImage += ', url(./images/pos.png)'
          langas.style.backgroundPosition += ', -0 -720px'
        }
        if (pos[4]) {
          langas.style.backgroundImage += ', url(./images/pos.png)'
          langas.style.backgroundPosition += ', -0 -1620px'
        }
        if (pos[5]) {
          langas.style.backgroundImage += ', url(./images/pos.png)'
          langas.style.backgroundPosition += ', -0 -1260px'
        }
        if (pos[6]) {
          langas.style.backgroundImage += ', url(./images/pos.png)'
          langas.style.backgroundPosition += ', -0 -540px'
        }
        if (pos[7]) {
          langas.style.backgroundImage += ', url(./images/pos.png)'
          langas.style.backgroundPosition += ', -0 -900px'
        }
        if (pos[8]) {
          langas.style.backgroundImage += ', url(./images/pos.png)'
          langas.style.backgroundPosition += ', -0 -1080px'
        }
        if (pos[9]) {
          langas.style.backgroundImage += ', url(./images/pos.png)'
          langas.style.backgroundPosition += ', -0 -1440px'
        }
        if (pos[10]) {
          langas.style.backgroundImage += ', url(./images/pos.png)'
          langas.style.backgroundPosition += ', 0 -10000px'
        }
        clearTimeout(del)
      }, 2000)

      const arr = []
      while (arr.length < 3) {
        const randomnumber = ((Math.floor(Math.random() * 3) + 1) * 60)
        if (arr.indexOf(randomnumber) > -1) continue
        arr[arr.length] = randomnumber
      }
      d1.className = 'ax1'
      d2.className = 'ax2'
      d3.className = 'ax3'
      d1.style.backgroundPosition = '0px ' + arr[1] + 'px'
      d2.style.backgroundPosition = '0px ' + arr[0] + 'px'
      d3.style.backgroundPosition = '0px ' + arr[2] + 'px'
    };
  };

  function opn () {
    document.getElementById('info').style.display = 'block'
  };

  function clo () {
    document.getElementById('info').style.display = 'none'
  };
  btns.addEventListener('click', btn)
}())
