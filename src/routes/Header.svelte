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
        <a class="navbar-brand  text-white" href="/">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEi-JWOvGCAdYsg0KcLYS5CNEfcD79S9vZVWRVDnEvdxU9Tr92Ki5Br-y6vQbpfxGahewNkPTS47EXlPkv7inyfTMXStSrrU_on-rnsCd-hAUr3XdyopommFUvaTpYFj33qtA2WsOyb8u9cflCBAoOHBSYfIIXVZeeQwmmAMAeQ1FmKMopvQemaJfNiEXA=s1200"
            alt="User"
            class="LogoImage"
          />
        </a>

        <button class="navbar-toggler" type="button" on:click={openNav}>
          <span class="" />
        </button>

        <div
          class="collapse navbar-collapse HeaderPosition"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav  ">
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
            <li class="nav-item">
              <button
                class="nav-link bg-primary border-0 mb-2 mt-0"
                on:click={toggle}
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-brightness-high-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                  />
                </svg>
              </button>
            </li>
            <form class="form-inline">
              <button class="btn  my-2 my-sm-0 nav_search-btn " type="submit">
                <i class="fa fa-search" aria-hidden="true" />
              </button>
            </form>
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
        <a class="nav-link" href="/">Home </a>
      </li>

      <li class="nav-item offcanvas-body-li">
        <a class="nav-link" href="/#/services">Services</a>
      </li>
      <li class="nav-item offcanvas-body-li">
        <a class="nav-link" href="/#/about"> About</a>
      </li>
      <li class="nav-item offcanvas-body-li">
        <a class="nav-link" href="/#/contact">Contact Us</a>
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
    left: 0;
    background-color: 040126;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 0px;
  }
</style>
