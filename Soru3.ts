// Soru 3: Logger sınıfı
class LoggerA {
  private logHistoryA: string[] = [];

  logA(messageA: string): void {
    this.logHistoryA.push(messageA);
    console.log(`Log: ${messageA}`);
  }

  showHistoryA(): void {
    console.log(this.logHistoryA.join(", "));
  }
}

const loggerA = new LoggerA();
loggerA.logA("Başlatılıyor...");
loggerA.logA("Sistem çalışıyor.");
loggerA.showHistoryA();
