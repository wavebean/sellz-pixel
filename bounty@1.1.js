window.addEventListener("DOMContentLoaded", function () {
    var e,
        t = window;
    (e = new URLSearchParams(t.location.search).get("aff_id") || localStorage.getItem("aff_id") || null) && localStorage.setItem("aff_id", e);
    let l = document.querySelectorAll("#sellz-button");
    if (l)
        for (let n = 0; n < l.length; n++)
            l[n].addEventListener("click", (l) => {
                l.preventDefault(), e ? (t.location.href = `https://app.sellz.co/register?aff_id=${e}`) : (t.location.href = "https://app.sellz.co/register");
            });
});
