package echec.src;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.Graphics2D;

import javax.swing.JPanel;




public class PanelEchec extends JPanel implements Runnable{
    private int jeuWidth = 640;
    private int jeuHeight = 640;


    // FPS
    final int FPS = 60;

    private GereSouris gereSouris = new GereSouris(this);
    private Thread gameThread;
    private Plateau plateau;

	private int tpsBlanc, tpsNoir;
	private String tour;

    public PanelEchec()
	{
		this.setPreferredSize(new Dimension(jeuWidth, jeuHeight));
        this.setBackground(new Color(135, 206, 235));
        this.setDoubleBuffered(true);
        this.addMouseListener(gereSouris);
        this.setFocusable(true);

		this.tpsBlanc = 600;
		this.tpsNoir = 600;
		this.tour = "Blanc";
		this.plateau = new Plateau(this);
    }

    public void startGameThread()
	{

        gameThread = new Thread(this);
        gameThread.start();
    }


    public void run()
	{
        final double drawInterval = 1_000_000_000/FPS;
        double delta = 0;
        long lastTime = System.nanoTime();
        long currentTime;

        while(gameThread != null){

            currentTime = System.nanoTime();

            delta += (currentTime - lastTime) / drawInterval;
            lastTime = currentTime;

            if (delta >= 1) {
                update();
                repaint();
                delta--;
            }
        }
    }
	
    public void update()
	{
		this.plateau.update();
    }

    public void paintComponent(Graphics g){
        super.paintComponent(g);
        Graphics2D g2 = (Graphics2D) g;

        this.plateau.draw(g2);

        g2.dispose();
    }

	public void setTour()
	{
		if( this.tour == "Noir" )
			this.tour = "Blanc";
		else 
			this.tour = "Noir";
	}

	public Plateau getPlateau() {return this.plateau;}
	public String getTour() {return this.tour;}
    
}
