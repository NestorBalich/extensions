class HolaMundo {
    getInfo() {
      return {
        id: holamundo,
        name: 'Esta funcionando nuestra extensión!',
        blocks: [
          {
            opcode: hola,
            blockType: Scratch.BlockType.REPORTER,
            text: Hola soy tu primer extensión de turbowarp, '
          }
        ]
      };
    }
  
    hola() {
      return 'Hiciste click y anduvo!!!';
    }
  }
  
  Scratch.extensions.register(new HolaMundo());
  