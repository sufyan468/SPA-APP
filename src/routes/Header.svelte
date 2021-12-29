<script>
  function toggle() {
    window.document.body.classList.toggle("dark-mode");
  }

  let navWidth = 0;
  const openNav = () => {
    //   Increase Width as you want
    navWidth = 100;
  };
  const closeNav = () => {
    navWidth = 0;
  };
</script>

<div class="hero_area">
  <div class="hero_bg_box" />

  <header class="header_section">
    <div class="container">
      <nav class="navbar navbar-expand-lg custom_nav-container ">
        <a class="navbar-brand  text-white d-flex align-items-center" href="/">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEi-JWOvGCAdYsg0KcLYS5CNEfcD79S9vZVWRVDnEvdxU9Tr92Ki5Br-y6vQbpfxGahewNkPTS47EXlPkv7inyfTMXStSrrU_on-rnsCd-hAUr3XdyopommFUvaTpYFj33qtA2WsOyb8u9cflCBAoOHBSYfIIXVZeeQwmmAMAeQ1FmKMopvQemaJfNiEXA=s1200"
            alt="User"
            class="LogoImage "
          />
          <b class="ms-2">BeNalu Dev</b>
        </a>

        <button class="navbar-toggler" type="button" on:click={openNav}>
          <span class="" />
        </button>

        <div
          class="collapse navbar-collapse HeaderPosition"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav  " style="margin-top: 0px;">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home </a>
            </li>

            <li class="nav-item">
              <!-- <a class="nav-link" href="/#/services">Services</a> -->
              <a href="/#/Services" class="nav-link">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#/about"> About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#/contact">Contact Us</a>
            </li>
            <li class="nav-item" on:click={openNav}>
              <button class="nav-link bar-toggler"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  class="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>

  <div class="sidenav" id="mySidenav" style="width: {navWidth}%">
    <div class="offcanvas-body">
      <div class="w-100 d-flex">
        <div class="flex-fill justify-content-end">
          <button on:click={closeNav} class="closeNavbar float-end"
            >Close</button
          >
        </div>
      </div>
      <li class="nav-item active offcanvas-body-li">
        <a class="nav-link text-white" href="/">Home </a>
      </li>

      <li class="nav-item offcanvas-body-li">
        <a class="nav-link text-white" href="/#/services">Services</a>
      </li>
      <li class="nav-item offcanvas-body-li">
        <a class="nav-link text-white" href="/#/about"> About</a>
      </li>
      <li class="nav-item offcanvas-body-li">
        <a class="nav-link text-white" href="/#/contact">Contact Us</a>
      </li>
    </div>
  </div>
  <section class="slider_section ">
    <div class="container ">
      <div class="row">
        <div class="col-md-6 ">
          <div class="detail-box">
            <h1>
              We Provide <br />
              Softare Services
            </h1>
            <p class="text-white text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
              magnam, voluptates distinctio, officia architecto tenetur debitis
              hic aspernatur libero commodi atque fugit adipisci, blanditiis
              quidem dolorum odit voluptas? Voluptate, eveniet?
            </p>
            <div class="btn-box text-left">
              <a href="#ReaMore" class="btn1"> Read More </a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="img-box-Header">
            <img
              src="https://tutorbees.net/assets/new_ui/sub-1.svg"
              title="New image"
              alt="Sub 1"
              class="Slider-Image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .offcanvas-body {
    background: #040126;
  }

  .offcanvas-body-li {
    color: orange !important;
    list-style: none !important;
  }
  .closeNavbar {
    display: flex;
    float: right;
    justify-content: end;
    margin: 1rem 0rem;
    border-radius: 16px;
    padding: 16px 34px;
    border: 0px;
    background: #ff7241;
    color: white;
  }

  .HeaderPosition {
    position: sticky;
  }
  .bar-toggler {
    background-color: transparent;
    border: 0px !important;
  }

  .Slider-Image {
    height: 500px;
    width: 100% !important;
  }
  .hero_bg_box::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #040126 !important;
  }
  /* side bar */
  .sidenav {
    height: 100vh !important;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: 040126;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 0px;
  }
  .nav-item:hover {
    background-color: #ff7241;
    color: white !important;
  }
</style>
