function hypotenuseCalculate() {
    var side_op = document.getElementById('side_op').value;
    var side_adj = document.getElementById('side_adj').value;

    if (side_adj == ''|| side_op == '')
    {
        document.getElementById('validation').innerHTML = 'The value of opposite side and adjacent side is required.';
    } else
        hypotenuse.value = Math.hypot(side_adj, side_op).toFixed(2);

}

hypotenuseCalculate();