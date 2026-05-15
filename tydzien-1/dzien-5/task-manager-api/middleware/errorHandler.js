const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const status = err.status || 500;
  const message = err.message || "Wystąpił wewnętrzny błąd serwera";

  res.status(status).json({
    error: message,
    // Pokazujemy szczegóły błędu tylko w trybie deweloperskim
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

module.exports = errorHandler;
