-- Criação do banco de dados 'embalagens' (caso não exista)
CREATE DATABASE IF NOT EXISTS embalagens;

-- Seleciona o banco de dados 'embalagens' para uso
USE embalagens;

-- Criação da tabela 'tipos_embalagem' (caso não exista)
CREATE TABLE IF NOT EXISTS tipos_embalagem (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    quantidade INT NOT NULL,
    descricao TEXT,
    tipo_embalagem VARCHAR(100),
    material VARCHAR(100),
    urlimg VARCHAR(255) 
);

INSERT INTO tipos_embalagem (nome, quantidade, descricao, tipo_embalagem, material, urlimg) VALUES
('Pote de Vidro Pequeno', 100,
 'Pote de vidro transparente, ideal para geleias, conservas e doces artesanais. Possui alta resistência térmica, não altera o sabor dos alimentos, é reciclável e fácil de higienizar. Tampa metálica com vedação hermética garante frescor e segurança.',
 'Alimentícia', 'Vidro', '/assets/img/pote-vidro-pequeno.jpg'),

('Frasco Plástico com Pump', 50,
 'Frasco plástico branco com pump dosador, perfeito para loções, cremes e sabonetes líquidos. Fabricado em plástico PET, é leve, resistente a quedas e fácil de manusear. O pump proporciona dosagem precisa e evita desperdício.',
 'Cosmético', 'Plástico PET', '/assets/img/frasco-plastico-pump.jpg'),

('Caixa de Papelão Ondulado', 200,
 'Caixa de papelão ondulado, indicada para transporte e armazenamento de diversos produtos. Estrutura reforçada, suporta empilhamento e protege contra impactos. Material reciclável, acabamento externo liso para personalização com impressão.',
 'Geral', 'Papelão', '/assets/img/caixa-papelao.avif'),

('Saco Metalizado para Alimentos', 150,
 'Saco metalizado com fecho zip, ideal para embalar alimentos como grãos, snacks e produtos desidratados. Barreira contra umidade, luz e oxigênio, preservando sabor e textura. Material flexível, fácil de abrir e fechar, reutilizável.',
 'Alimentícia', 'Metalizado', '/assets/img/saco-metalizado.jpg'),

('Bobina BOPP transparente', 100,
 'Bobina de BOPP (polipropileno biorientado) transparente, utilizada em máquinas extrusoras e fabricantes de embalagens flexíveis. Alta resistência mecânica, brilho intenso, excelente transparência e proteção contra umidade. Ideal para alimentos e produtos industriais.',
 'Geral', 'Plástico BOPP', '/assets/img/embalagem-bopp.jpg'),

('Tubo bisnaga de Alumínio Flexível', 75,
 'Bisnaga de alumínio flexível, indicada para cremes, pomadas e produtos farmacêuticos. Material leve, maleável, protege contra luz e oxidação, preservando a qualidade do conteúdo. Tampa rosqueável e corpo resistente à deformação.',
 'Cosmético', 'Alumínio', '/assets/img/tubo-bisnaga.jpg'),

('Filme de Polietileno', 75,
 'Filme de polietileno de alta aderência, grande resistência mecânica para alongamento e tração. Resistente à perfuração, com brilho e transparência superiores, proporcionando excelente aspecto visual. Usado para embalar alimentos, cosméticos e produtos industriais.',
 'Cosmético', 'Filme-polietileno', '/assets/img/filme-polietileno.jpg'),

('Polietileno de alta densidade', 75,
 'Embalagem de polietileno de alta densidade (PEAD), indicada para produtos químicos, alimentos e cosméticos. Alta resistência a impactos, boa barreira contra umidade, flexível e reciclável. Utilizada em frascos, galões e sacos industriais.',
 'Cosmético', 'Alumínio', '/assets/img/polietileno-de-alta-densidade.jpg'),

('Polietileno de baixa densidade', 75,
 'Embalagem de polietileno de baixa densidade (PEBD), ideal para sacos plásticos, filmes e embalagens flexíveis. Material macio, flexível, com boa transparência e resistência química. Facilita o armazenamento e transporte de diversos produtos.',
 'Cosmético', 'Alumínio', '/assets/img/polietileno-de-baixa-densidade.jpg');

-- Criação da tabela 'contato' (caso não exista)
CREATE TABLE IF NOT EXISTS contato (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(30),
    assunto VARCHAR(50) NOT NULL,
    mensagem TEXT NOT NULL,
    data_envio DATETIME DEFAULT CURRENT_TIMESTAMP
);

