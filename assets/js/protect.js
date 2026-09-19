/* ==========================================
   California Dental - Copy deterrent
   Deters casual copying via browser menus.
   (Note: cannot fully prevent copying.)
   ========================================== */
(function () {
  "use strict";

  /* Mark images as non-draggable and block drag/drop */
  var setDraggable = function () {
    var imgs = document.querySelectorAll("img");
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].setAttribute("draggable", "false");
    }
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setDraggable);
  } else {
    setDraggable();
  }
  document.addEventListener("dragstart", function (e) { e.preventDefault(); });

  /* Block common copy/save/print hotkeys and printscreen */
  document.addEventListener("keydown", function (e) {
    var kc = e.keyCode || e.which;
    var ctrl = e.ctrlKey || e.metaKey;
    if (ctrl && [85, 83, 80].indexOf(kc) !== -1) { e.preventDefault(); return; }  /* Ctrl+U / Ctrl+S / Ctrl+P */
    if (ctrl && [67].indexOf(kc) !== -1 && e.altKey) { e.preventDefault(); return; } /* Ctrl+Alt+C */
    if (kc === 123) { e.preventDefault(); return; }  /* F12 */
    if (kc === 44) { e.preventDefault(); }           /* PrintScreen */
  });
})();