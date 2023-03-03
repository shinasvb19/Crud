function fibnocciSeries(n) {
  if (n > 0) {
    return fibnocciSeries(n - 1) + fibnocciSeries(n + 1);
  }
}

fibnocciSeries(8);
