// This is just a utility script used to generate the Arc elements

{/* <arc id="m1" class="minute" start-angle="1" />
  <arc id="m2" class="minute" start-angle="7" />
  <arc id="m3" class="minute" start-angle="13" />
  <arc id="m4" class="minute" start-angle="19" />
  <arc id="m5" class="minute" start-angle="25" /> */}

  for (let i = 0; i < 60; i++) {
    console.log(
      `<arc id="m${i+1}" class="minute" start-angle="${i*6 + 1}" />`
    );
  }