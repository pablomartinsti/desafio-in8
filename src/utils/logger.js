// Definir diferentes níveis de log
const levels = {
    info: 'INFO',
    warn: 'WARN',
    error: 'ERROR'
  };
  
  // Função para exibir mensagens de log com um timestamp
  function log(level, message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}]: ${message}`);
  }
  
  // Funções específicas para cada nível de log
  export function info(message) {
    log(levels.info, message);
  }
  
  export function warn(message) {
    log(levels.warn, message);
  }
  
  export function error(message) {
    log(levels.error, message);
  }
  