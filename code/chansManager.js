inlets = 1;
outlets = 1;

outlet(0, "chans", 1);

function msg_int(value) {
  outlet(0, "chans", value);
}
